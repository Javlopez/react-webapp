import React, {Component} from 'react';
import ChannelSection from './channels/ChannelSection.jsx';

class App extends Component{

	constructor(props){
		super(props)
		this.state = {
			channels:[]
		};
	}

	addChannel(name){
		let {channels} = this.state;
		channels.push({id: channels.length, name});
		this.setState({channels});
		//TODO this should be send to the server
	}

	setChannel(activeChannel){
		this.setState({activeChannel});
		//TODO get info from server
	}

	render(){
		return (
			<div className='app'>
				<div className='nav'>
					<ChannelSection
						channels={this.state.channels}
						setChannel={this.setChannel.bind(this)}
						addChannel={this.addChannel.bind(this)}
					/>
				</div>
			</div>
		)
	}
}

export default App;