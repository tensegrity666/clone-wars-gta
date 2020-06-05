import Phaser from 'phaser';

const formatScore = (score) => `Score: ${score}`;

class ScoreLabel extends Phaser.GameObjects.Text {
  constructor(scene, x, y, score, style) {
    super(scene, x, y, formatScore(score), style);

    this.score = score;
  }

  setScore(score, scene) {
    this.score = score;
    this.updateScoreText(scene);
  }

  add(points) {
    this.setScore(this.score + points);
  }

  updateScoreText(scene) {
    scene.setText(this.score);
  }
}

export default ScoreLabel;
