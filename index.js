var Botkit = require('botkit');
var controller = Botkit.slackbot();

var bot = controller.spawn({
    token:require('./config').token
 });

 var watsonMiddleware = require('botkit-middleware-watson')({
   username: "0ca78eae-9b27-4703-8129-5aa486d2646a",
   password: "5STrGrsWUKcE",
   workspace_id: "342c8fec-8e0f-489a-9368-b7cfa38b9b65",
   version_date: "2016-09-20"
 });

controller.middleware.receive.use(watsonMiddleware.receive);

controller.hears(['.*'], ['direct_message', 'direct_mention', 'mention'], function(bot, message) {
    bot.reply(message, message.watsonData.output.text.join('\n'));
});

bot.startRTM();
