export class Test {
    private msg: string;
    constructor(msg: string) {
        this.msg = msg;
    }

    public alert() {
        alert(this.msg);
    }

    public log() {
        console.log(this.msg);
    }
}