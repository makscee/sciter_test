export class Widget extends Element {
  componentDidMount() {
    this.content(this.innerHTML);
  }
}