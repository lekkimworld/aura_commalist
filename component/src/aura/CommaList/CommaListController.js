({
    dataChanged: function(component, event, helper) {
        const objs = event.getParam('value');
        if (!objs) {
            component.set('v.displayObjects', undefined);
            return;
        }
        const displayPath = component.get('v.displayTextPath') ? component.get('v.displayTextPath').split('.') : undefined;
        const idPath = component.get('v.idPath') ? component.get('v.idPath').split('.') : undefined;
        const process = x => {
            if (typeof x === 'object') {
	            const path = thePath => {
                    let o;
                    for (let idx in thePath) {
                        o = (o ? o[thePath[idx]] : x[thePath[idx]]);
                    }
			        return o;
        		}
			    const txt = displayPath ? path(displayPath) : x;
    			const id = idPath ? path(idPath) : undefined;
	            return {'id': id, 'displayText': txt};
            } else {
                return {'displayText': x};
            }
        }
        
        if (!Array.isArray(objs)) {
            component.set('v.displayObjects', process(objs));
        } else {
            const displayObjects = [];
            objs.forEach((x, idx, arr) => displayObjects.push(process(x)));
            component.set('v.displayObjects', displayObjects);
        }
    },
	navigate: function(component, event, helper) {
		const e = event.srcElement;
        if (!e || e.localName !== 'a' || !e.id) {
            return;
        }
        if (e.id.indexOf('https://') === 0 || e.id.indexOf('http://') === 0) {
            const ev = $A.get('e.force:navigateToURL');
            ev.setParams({'url': e.id});
            ev.fire();
        } else {
			const ev = $A.get('e.force:navigateToSObject');
            ev.setParams({'recordId': e.id});
            ev.fire();
        }
        event.stopPropagation();
	}
})