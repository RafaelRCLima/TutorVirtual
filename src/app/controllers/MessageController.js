import Assistant from '../../watson'

class MessageController {
  async askTutor (req, res) {
    // Assistant.message({
    //   workspaceId: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/fa5e8ab9-3b9c-4fd8-9d95-4489d5b6a05d/v1/workspaces/44b6e1e4-e596-4f3b-ae37-d79439e34dad/message',
    //   input: {
    //     text: req.body.text
    //   },
    //   context: undefined
    // }).then(response => {
    //   res.json(JSON.stringify(response.result, null, 2))
    // })
    //   .catch(err => {
    //     console.log('error: ', err)
    //   })

    // const question = req.body
    // if (!question.content) {
    //   return res.status(400).json({ error: 'Nenhuma pergunta foi inserida' })
    // }
    // const answer = { content: 'Olá, seja bem vindo ao seu Tutor de algoritmos' }
    // return res.status(200).json({
    //   question,
    //   answer
    // })

    const messageAsync = function (text, context) {
      const payload = {
        workspaceId: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/fa5e8ab9-3b9c-4fd8-9d95-4489d5b6a05d/v1/workspaces/44b6e1e4-e596-4f3b-ae37-d79439e34dad/message',
        input: {
          text: text
        },
        context: context
      }
      return Assistant.message(payload)
    }

    res.json(await messageAsync(req.body.text, undefined))
  }

  async dialogTest (req, res) {
    return res.json({ message: 'teste' })
  }
}

export default new MessageController()
