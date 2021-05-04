import React from 'react';
import { Grid } from 'semantic-ui-react';


function Chat() {
    return (
        <Grid columns="equal">
          <h3>Header 1</h3>
          <Grid.Column className="messagepanel">
            <p>Sahan Hasintha</p>
          </Grid.Column>
    
          <Grid.Column width={3}>
            <span>
    
            </span>
          </Grid.Column>
        </Grid>
    
      );
}

export default Chat;