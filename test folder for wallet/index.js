function getAccount()
{
   window.solana.connect 
   window.solana.request({method:"connect"})
}

function discconnectAccount()
{
    window.solana.disconnect()
    window.solana.on('disconnect',() => console.log("disconnected"))
}