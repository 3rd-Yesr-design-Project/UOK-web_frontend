import React from 'react';
import { Grid } from 'semantic-ui-react';
import { SideBar } from '../Sidebar/Sidebar';
import  Message  from '../Message/Message';
function Chat() {
    return (
        <Grid columns="equal">
            <SideBar />
            <Grid.Column className="messagepanel">
                <Message/>
            </Grid.Column>

            <Grid.Column width={3}>
                <span>

                </span>
            </Grid.Column>
        </Grid>
    
      );
}

export default Chat;