import form from "../scripts/form.json"
import { ShortAnswerInput } from "../components"

const Questions = () => {

  return (
    <div>
      {form.fields.map(field => {
        const { id } = field

        let questionInput = null

        switch (field.type) {
          case "SHORT_ANSWER":
            questionInput = <ShortAnswerInput id={id}/>
        }

        if (!questionInput) return null

        return (
          <div>
            <p>{field.label}</p>: {questionInput}
          </div>
        )

      })}
    </div>
  )
}

export { Questions }
