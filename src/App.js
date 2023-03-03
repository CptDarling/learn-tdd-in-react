import NewMessageForm from "./components/NewMessageForm";
export default function App() {
  return (
      <NewMessageForm onSend={handleSend} />
  )
}
