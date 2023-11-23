
import '../Style/Card.css'
function Card() {
  return (
    <>
 <div className='card'> 
<div className="d-flex justify-content-center gap-5 mt-5 b" style={{direction:'rtl',color:"#4e3797" }}>
<h1 className='bootcamp'>المعسكرات والبرامج</h1>
    <button className='btu'>الكبار</button>
    <button className='btu'>الناشئون</button>
</div>
</div>
</>
  )
}
export default Card