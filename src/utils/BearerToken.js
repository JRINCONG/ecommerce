


export const BearerToken = () =>{


const token = localStorage.getItem('token')

return{
	headers: {
		Authorization: `Bearer ${token}`
	}
}

}

