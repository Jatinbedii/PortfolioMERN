import trollface from '../assets/trollface.png'

function Error() {
  return (
    <>
    <div className="flex justify-center pt-[80px]  md:pt-4">
    <img src={trollface}  className="max-h-[400px]" />
    </div>
    <div className="flex justify-center pt-4 pb-10" >* * * Please Go Back * * *</div>
    </>
  )
}

export default Error