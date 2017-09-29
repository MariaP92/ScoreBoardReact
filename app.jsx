let PLAYERS = [
  {
    name: "Jim Hoskins",
    score: 31,
    id: 1,
  },
  {
    name: "Andree Hoskins",
    score: 35,
    id: 2,
  },
  {
    name: "Alena Hoskins",
    score: 42,
    id: 3,
  },
];

const stopWatch = () => {
  let contador = 0;
  return (
    <div className="stopwatch container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h2>STOPWATCH</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <p className="stopwatch-time">{contador}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <button>START</button>
        </div>
        <div className="col-md-6">
          <button>RESET</button>
        </div>
      </div>
    </div>

  );
}

const Header = ({ players }) => {
  let score = 0;
  let playersNum = players.length;
  console.log(playersNum);
  for (var i = 0; i < players.length; i++) {
    score += parseInt(players[i].score);
    console.log(score);
  }
  return (
    <div className="header" >
      <h1 className="stats">PLAYERS: {playersNum}</h1><br />
      <h1 className="stats">TOTAL POINTS: {score}</h1>

      {stopWatch()}

    </div>
  );
}

const getPlayersList = (players) => {
  return players.map((player, index) => {
    return (
      <li key={index}>
        <div className="player player-name col-md-6 col-sm-6 col-xs-6 ">
          <p>{player.name}</p>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6 ">
          <div className=" col-md-2 col-sm-2 col-xs-2">
            <button className="counter-action decrement btn btn-danger">-</button>
          </div>
          <div className="counter-score col-md-2 col-sm-2 col-xs-2">
            <p>{player.score}</p>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-2">
            <button className="counter-action increment btn btn-success">+</button>
          </div>
        </div>

      </li >

    );
  });
}


const PlayerList = ({ players }) => {
  console.log("hola");
  return (
    <div>
      <ul>{getPlayersList(players)}</ul>
    </div>
  );
}

const PlayerForm = () => {
  return (
    <div className="add-player-form">
      <input type="text" placeholder="Enter a name" />
      <button  >ADD PLAYER</button>
    </div>
  );
}

const Application = ({ title, players }) => {
  return (
    <div className="scoreboard">
      <Header players={players} />
      <PlayerList players={players} />
      <PlayerForm />
    </div>
  );
}

ReactDOM.render(
  <Application title="Scoreboard" players={PLAYERS} />,
  document.getElementById('container')
);
