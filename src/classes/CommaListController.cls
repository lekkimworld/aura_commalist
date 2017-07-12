public with sharing class CommaListController {
	
    @AuraEnabled
    public static List<Account> getAccounts() {
        List<Account> accounts = [SELECT Id, Name FROM Account];
        return accounts;
    }
    
}