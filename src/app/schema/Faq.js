import mongoose from 'mongoose'

const FaqSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('Faq', FaqSchema)
