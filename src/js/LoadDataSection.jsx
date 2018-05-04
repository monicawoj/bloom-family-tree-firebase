import React from "react";

class LoadDataSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollToTopHover: false,
        }
    }

    handleLoadDataClick = (e) => {
        this.props.convertCsvToJson(this.props.csvContents);
        this.props.smoothScroll(e, '#MainHeader');
    };

    render() {
        const tableSectionStyle = {
            height: '100vh',
            width:'90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            overflowX: 'scroll',
        };

        const buttonSectionStyle = {
            width:'80%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-around',
        };

        const buttonStyle = {
            color: 'white',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            height: '30px',
            borderRadius: '5px',
            boxSizing: 'border-box',
            justifyContent: 'center',
            flex: 1,
            width: '50%',
            cursor: 'pointer',
        };

        const scrollToTopButtonStyle = this.props.buttonStyle(this.state.scrollToTopHover);

        return <div style={{position:'relative'}}>
            <a style={{...scrollToTopButtonStyle, width:'50px', borderRadius:'50%', position:'absolute', top:'3px', left:'47.5%', boxShadow: 'none'}}
               onMouseOver={e => this.setState({scrollToTopHover : true})}
               onMouseOut={e => this.setState({scrollToTopHover : false})}
               onClick={e => this.props.smoothScroll(e,'#MainHeader')}
               href={'#MainHeader'}>
                <i className="fas fa-arrow-up" style={{color:'royalblue', fontSize:'25px'}}></i>
            </a>
            <div id='LoadDataSection' style={tableSectionStyle}>
                <h1 style={{fontSize:'26px'}}>Upload CSV data</h1>
                <h2 style={{fontSize:'18px', margin:0}}>
                    Please ensure that your file includes the following columns (named exactly as shown), and <b> one root node</b> (node with no mother or father specified):
                </h2>
                <table>
                    <thead>
                    <tr>
                        <th>first</th>
                        <th>last</th>
                        <th>mother</th>
                        <th>father</th>
                        <th>sex</th>
                        <th>spouse</th>
                        <th>birthDate</th>
                        <th>birthLocation</th>
                        <th>email</th>
                        <th>info</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Krzysztof</td>
                        <td>Cebula</td>
                        <td></td>
                        <td></td>
                        <td>Male</td>
                        <td>Maria Gierek</td>
                        <td>05/21/57</td>
                        <td>Warszawa, Polska</td>
                        <td>krzyszek@gmail.pl</td>
                        <td>Profesionalny piłkarz</td>
                    </tr>
                    <tr>
                        <td>Ala</td>
                        <td>Cebula</td>
                        <td>Maria Gierek</td>
                        <td>Krzysztof Cebula</td>
                        <td>Female</td>
                        <td>Feliks Wozniak</td>
                        <td>12/05/89</td>
                        <td>Rzeszów, Polska</td>
                        <td>ale@gmail.pl</td>
                        <td>Mieszka w Tajlandii</td>
                    </tr>
                    </tbody>
                </table>
                <p>
                    <span style={{color:'LightCoral'}}>Are you sure?</span> This will remove all of your existing data and replace with new data located in your CSV file.
                </p>
                <div style={buttonSectionStyle}>
                    <div style={{...buttonStyle, background: 'white', color:'black', flex:2}}>
                        <input onChange={this.props.handleFileUploadChange}
                               type='file'
                               id='file'
                               accept='.csv'
                               name='file'/>
                    </div>
                    <a
                        href='#MainHeader'
                        onClick={e => this.handleLoadDataClick(e)}
                        style={{...buttonStyle, background: (this.props.pathToCsv) ? '#00cc66' : 'grey', marginBottom:'5px', textDecoration:'none'}}>
                        <p>submit</p>
                    </a>
                </div>
            </div>
        </div>
    }
}

export default LoadDataSection;