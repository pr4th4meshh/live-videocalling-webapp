import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const [roomCode, setRoomCode] = useState("")

  const navigate = useNavigate()
  const handleFormSubmit = (ev: FormEvent) => {
    ev.preventDefault()
    navigate(`/room/${roomCode}`)
  }
  return (
    <div className="roomDiv">
      <form onSubmit={handleFormSubmit} className="roomForm">
        <h1>Enter room code:</h1>

        <input
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          type="text"
          placeholder="Enter room code.."
        />
        <button type="submit">Enter</button>
      </form>
    </div>
  )
}

export default HomePage
