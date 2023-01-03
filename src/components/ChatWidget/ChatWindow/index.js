import './index.scss'
import { Amplify } from 'aws-amplify'
import LexChat from "react-lex-plus";

// import awsExports from "../../../aws-exports";

// Amplify.configure(awsExports);

const ChatWindow = () => {

  return (
    
      <div className='chat-window'>
        <LexChat
        botName="YouLyuPortfolioBot"
        IdentityPoolId="us-east-1:a75a39ea-1c04-4aea-8202-062f4027d7d0"
        placeholder="Placeholder text"
        backgroundColor="#FFFFFF"
        height="430px"
        region="us-east-1"
        headerText="Chat with our awesome bot"
        headerStyle={{ backgroundColor: "#ABD5D9", fontSize: "30px" }}
        greeting={
          "Hello, how can I help? You can say things like 'help' to get more info"
        }
        />
      </div>
    
  )
}

export default ChatWindow
