import './People.css'
/* eslint-disable react/prop-types */
export default function People({ image , name , par  }) {
    return (
        <article className="people" >
            <img src={image} alt="" />
            <p className='nameP' > {name} </p>
            <p className='parP' > {par} </p>
        </article>
    )
}