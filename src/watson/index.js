import Assistant from 'ibm-watson/assistant/v1'
import { IamAuthenticator } from 'ibm-watson/auth'

const watsonAssistant = new Assistant({
  authenticator: new IamAuthenticator({ apikey: '4Woy5ObjCDDc9n9nBQ7XtcvOSIxKF6gkAQm9G0J6zQgo' }),
  version: '2020-04-01'
})

// watsonAssistant.setServiceUrl(
//   'https://api.us-south.assistant.watson.cloud.ibm.com/instances/fa5e8ab9-3b9c-4fd8-9d95-4489d5b6a05d/v1/workspaces/44b6e1e4-e596-4f3b-ae37-d79439e34dad/message'
// )

export default watsonAssistant
