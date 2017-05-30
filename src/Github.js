import React, { Component } from 'react'

import './Github.css'

class Github extends Component{
    render(){
        return(
            <div className="github">
                <img className="github-logo" src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png"/>
                <form>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <button type="submit">Look up a github user</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Github