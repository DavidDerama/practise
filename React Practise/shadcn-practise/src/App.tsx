import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import './App.css'

const App = () => {

  return (
    <div className='bg-dark font-gabarito min-h-screen flex flex-col'>
      <div className='flex-grow'>
        <div className='max-w-screen-xl mx-auto flex flex-col items-center py-5 h-full flex flex-col gap-10'>
          <h1 className='text-light_heading text-5xl'>Hello World</h1>
          <Alert className="bg-dark_input_bg border-2 border-dark_input_border text-light py-4">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components and dependencies to your app using the cli.
            </AlertDescription>
          </Alert>
          <Dialog>
            <DialogTrigger className="bg-light py-1 px-5 rounded-full">Open</DialogTrigger>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
            </Dialog>
        </div>
      </div>
     </div>
  )
}

export default App
