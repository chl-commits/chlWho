// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler, MessageFactory } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            const replyText = `Echo: ${ context.activity.text }`;
            const replyRentals = 'Andrew Gorman - Team Leader - Ext: 1261 - M: 704-578-8860\r\nCassell Smith - Ext: 1238 - M: 704-641-2786\r\nJeremy Hill - Ext: 1333 - M: 980-348-7501\r\nJon Parris - Ext: 2255 - M: 770-349-5192\r\nDavid Andreesen - Ext: 1330 - M: 980-287-6805'
            const replyParts = 'Service Support\r\nBen Schuerman - Team Leader - Ext: 1321\r\nDarrell Womack - Team Leader - Ext: 2258\r\nJeremy Pendley - Ext: 2238\r\nRawland Simmons - Ext: 2229\r\nEd Hunter - Ext: 3409\r\nGreg Cannizzaro - Ext: 1341\r\nAlex Stopchick - Ext: 1366'
            const replyPartsPurch = 'Parts Purchasing\r\nDavid Crandall - Team Leader - Ext: 1266\r\nKalman Molnar - Ext: 1364\r\nDoug Branch - Ext: 1276\r\nHeather Conn - Ext: 2274'
            const replyIT = 'IT Department\r\nWill Cauthen - Team Leader - Ext: 1298\r\nKayle Reid - Ext: 3539\r\nTim Lemponen - Ext: 1312\r\nOctavian Whittaker Ext: 2337'
            
            
            if (context.activity.text.includes('Rent') === true || context.activity.text.includes('rent')   ){
            	
            	await context.sendActivity(MessageFactory.text(replyRentals, replyText));
            }
            
            else if (context.activity.text.includes('Part') === true || context.activity.text.includes('part') ){
            	await context.sendActivity(MessageFactory.text(replyParts, replyText));
            	await context.sendActivity(MessageFactory.text(replyPartsPurch, replyText));
            }
           else if (context.activity.text.includes('Purch') === true  || context.activity.text.includes('purch') ){
           		await context.sendActivity(MessageFactory.text(replyPartsPurch, replyText));
           			
          }
           else if (context.activity.text.includes('IT') === true  || context.activity.text.includes('it') ){
           		await context.sendActivity(MessageFactory.text(replyIT, replyText));
           			
          }
            else{
            	 await context.sendActivity(MessageFactory.text('Nope', replyText));
            }
            	 
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Find out who works in where. (Parts, Rentals, IT, etc...)';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;
