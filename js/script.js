var app = document.getElementById('writer');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 60,
  deleteSpeed: 1,
});

typewriter
  .pauseFor(1000)
  .typeString(
    'wisp team is a group of independent developers, our goal is to provide a simple and affordable tool for automated market trading. Our native token, the White Wisp Token (WWT), is designed to be used in the trading system, allowing users to put it in staking or pay them directly. It is important to note that we have not reserved tokens for team members, nor do we have investors, advisors or other early holders. Our token will be fully hosted on a decentralized platform for efficient ecosystem management.'
  )
  .start();
