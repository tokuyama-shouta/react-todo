import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

    //state（状態) jsでデータを保存する箱
    this.state = {
        input: ""
    }
  }

  render() {
    return(

        <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.input} onChange={this.handleChange}/>
            <button>追加</button>
        </form>

    )
  }

  handleChange = e => {
    this.setState({ input: e.currentTarget.value })
  };
  handleSubmit = e => {
    //初期からある挙動を止める
    //ページ繊維をなくす
    e.preventDefault();
    this.props.onSubmit(this.state.input)
    console.log(this.state.input)
    this.setState({ input:""})
  };
}

export default Form