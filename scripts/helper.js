class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const dur = player.getDuration();
    $('#time-control .total-time').text(player.prettyTime(dur));
  }
}
const helper = new Helper();
