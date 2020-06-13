import React, {Component} from 'react'
interface props{
    isTrue:boolean
}
class New extends Component {
    constructor(props: Readonly<props>) {
        super(props);
        this.state = {}

    }

    render() {
        return <div>新闻</div>
    }
}

export default New

  
