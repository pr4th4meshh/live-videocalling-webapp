import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useParams } from "react-router-dom"

const RoomPage = () => {
  const { roomId } = useParams<{ roomId: string }>()

  const myMeeting = (element: HTMLDivElement | null) => {
    if (!element || !roomId) return
    const appID = 1289257775
    const serverSecret = "e5922975e13e6107e99070593e7e39e5"

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Type your name here.."
    )

    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    })
  }
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div ref={myMeeting} />
    </div>
  )
}

export default RoomPage
