({
	doinit: function(component, event, helper) {
		component.set("v.strings", ['foo', 'bar', 'baz']);
        component.set("v.objects", [
            {Name: 'foo', Link: 'https://www.salesforce.com?1', Child: {Link: 'https://developer.salesforce.com'}}, 
            {Name: 'bar', Link: 'https://www.salesforce.com?2', Child: {Link: 'https://developer.salesforce.com'}}, 
            {Name: 'baz', Link: 'https://www.salesforce.com?3', Child: {Link: 'https://developer.salesforce.com'}}]);
	}
})