const { SapphireClient, LogLevel } = require('@sapphire/framework')
const { token } = require("./config.json")

const client = new SapphireClient({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
    defaultPrefix: 'v!',
    logger: {
        level: LogLevel.Debug
    }
})

const main = async () => {
	try {
		client.logger.info('Logging in');
		await client.login(token);
		client.logger.info('logged in');
	} catch (error) {
		client.logger.fatal(error);
		client.destroy();
		process.exit(1);
	}
};

main();

