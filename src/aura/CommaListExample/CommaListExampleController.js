({
	doinit: function(component, event, helper) {
		// array of strings
		component.set("v.strings", ['foo', 'bar', 'baz']);

		// array of objects
        component.set("v.objects", [
            {Name: 'foo', Link: 'https://www.salesforce.com?1', Child: {Link: 'https://developer.salesforce.com'}}, 
            {Name: 'bar', Link: 'https://www.salesforce.com?2', Child: {Link: 'https://developer.salesforce.com'}}, 
            {Name: 'baz', Link: 'https://www.salesforce.com?3', Child: {Link: 'https://developer.salesforce.com'}}]);

        // get accounts
        const action = component.get('c.getAccounts');
        action.setCallback(this, function(response) {
        	if (response.getState() === 'SUCCESS') {
        		component.set('v.accounts', response.getReturnValue());
        	} else {
        		console.log('Bummer...');
        	}
        });
        $A.enqueueAction(action);
	}
})