const { Command } = require('@sapphire/framework');
const { isMessageInstance } = require('@sapphire/discord.js-utilities')

class PingCommand extends Command {
  constructor(context, options) {
    super(context, {
      ...options,
      name: 'ping',
      description: 'Ping bot to see if it is alive',
      chatInputCommand: {
        register: true
      }
    });
  }

  async chatInputRun(interaction) {
    const msg = await interaction.reply({ content: `Ping?`, ephemeral: false, fetchReply: true });

    if (isMessageInstance(msg)) {
      const diff = msg.createdTimestamp - interaction.createdTimestamp;
      const ping = Math.round(this.container.client.ws.ping);
      return interaction.editReply(`Pong 🏓! (Round trip took: ${diff}ms. Heartbeat: ${ping}ms.)`);
    }

    return interaction.editReply('Failed to retrieve ping :(');
  }

}

module.exports = {
  PingCommand
};