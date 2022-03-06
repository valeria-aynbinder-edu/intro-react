import React from 'react';
import { Calculator } from './Converter';
import { FlavorForm } from './FlavourForm';
import { NameForm } from './NameForm';

class App extends React.Component {

    constructor(props) {
        super(props)
        
        this.submitted_names = []
    }


    render() {
        return(
            <>
                <NameForm />
                <FlavorForm />
                <Calculator />
            </>
        )
    }

}

export default App;