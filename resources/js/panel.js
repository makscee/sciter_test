export class Panel extends Element {
    widgets = [
        "text"
    ];

    addWidget(type) {
        this.widgets.push(type);
        this.componentUpdate();
    }

    removeWidget() {
        this.widgets.pop();
        this.componentUpdate();
    }

    componentDidMount() {
        document.on("click", "#minus", function (event, input) {
            var panel = document.$("panel");
            // @ts-ignore
            panel.removeWidget();
        });
        document.on("click", "#plus", function (event, input) {
            var panel = document.$("panel");
            var type = document.$("#w-type").value;
            console.log(type);
            // @ts-ignore
            panel.addWidget(type);
        });
        this.componentUpdate();
    }

    render() {
        this.content(<div></div>);
        this.widgets.forEach(type => {
            var element;
            switch (type) {
                case "text":
                    element = <widget>some text</widget>;
                    break;
                case "slider":
                    element = <widget><slider /></widget>;
                    break;
                case "enum":
                    element = <widget><enum /></widget>;
                    break;
            }
            this.append(element);
        })
        // for (var i = 0; i < this.widgets.length; i++) {
        //     this.append(<widget>test {i}</widget>);
        // }
    }
}