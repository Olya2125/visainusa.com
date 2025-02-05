
import { styles } from "./chat";
import ChatEngine from './ChatEngine';


const SupportWindow = props => {

    return (
        props.visible && 
        <div 
            style={{
                ...styles.supportWindow,
                ...{ opacity: props.visible ? '1' : '0' }
            }}
        >
            <ChatEngine visible={props.user !== null && props.chat !== null} chat={props.chat} user={props.user}/>
        </div>
    )
}

export default SupportWindow;