import * as React from "react";

const stylesCss = require("./SearchForm.less");
import { browserHistory } from 'react-router'
import SearchIcon from 'material-ui-icons/Search';
import { withStyles, MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';

import Input, { InputLabel } from 'material-ui/Input';
import purple from 'material-ui/colors/purple';
import red from 'material-ui/colors/red';
import withRouter from "react-router/es/withRouter";


const styles = theme => ({
})

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      inkbar: {
        '&:after': {
          backgroundColor: '#00e676'
        }
      },
      underline: {
        color: '#fff',
        '&:before': {
          backgroundColor: 'rgba(255, 255, 255, 0.7)'
        },
        '&:hover:not($disabled):before': {
          backgroundColor: '#fff',
        },
      },
    },
  },
});



let input; //TODO: fix
function SearchForm({ classes, location: { query : { q } } }) {
  const onSubmit = (e) => {
    e.preventDefault();
    browserHistory.push('/search?q=' + input.value);
  }
  

  return (
    <MuiThemeProvider theme={theme}>
    <form onSubmit={onSubmit}>
      <div className={stylesCss.wrapper}>
        <div className={stylesCss.search}>
          <SearchIcon />
        </div>
        <Input 
          defaultValue={q}
          inputRef={node => {
            input = node 
          }} 
          fullWidth={true}         
        />
      </div>
    </form>
    </MuiThemeProvider>
  );
}

export default withRouter(withStyles(styles)(SearchForm));
