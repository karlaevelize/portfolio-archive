import form from "../scripts/form.json"
import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'
import { Questions } from "../components"

const AddProject = () => {

  const methods = useGoogleForm({ form })

  const submitForm = async (data) => {
    console.log("form data", data)
    await methods.submitToGoogleForms(data)
  }
  
  return(
    <div style={{ paddingTop: 60 }}>
      <h1>AddProject</h1>
      <GoogleFormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(submitForm)}>
          {form.title && (
            <div>
              <h2>{form.title}</h2>
            </div>
          )}
          <Questions/>
          <button type="submit">Submit</button>
        </form>
      </GoogleFormProvider>
    </div>
  )
}

export { AddProject }