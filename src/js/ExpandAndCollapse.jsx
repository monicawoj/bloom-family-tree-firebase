import React from "react";

class ExpandAndCollapse extends React.Component {
    render() {
        const {menuExpanded} = this.props;
        let icon;
        if (menuExpanded) {
            icon = 'close';
        } else {
            icon = 'add';
        }

        return <div style={{background: 'royalblue', height:this.props.size[1], width:this.props.size[0], display:'flex', justifyContent:'flex-start', alignItems:'center', flexDirection:'row', borderTopRightRadius:'5px'}}>
            <div onClick={this.props.toggleExpand} style={{zIndex:10, background: 'royalblue', borderTopRightRadius:'8px', borderBottomRightRadius:'8px', height: '60px', width: '30px', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <i style={{color: 'white', fontSize:'30px'}} className="material-icons">{icon}</i>
            </div>
        </div>
    }
}

export default ExpandAndCollapse;