export default function GET(req, res) {
    console.log("GET REQUEST")
    res.status(200).json({ message: 'login page' })
  }