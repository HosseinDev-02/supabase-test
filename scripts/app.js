const { createClient } = supabase

const dbProjectURL = 'https://ggrfpzspkcbgtjucqevo.supabase.co'
const dbProjectKEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdncmZwenNwa2NiZ3RqdWNxZXZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5NzM0NDAsImV4cCI6MjAzOTU0OTQ0MH0.P9XQU1WoW0f-JJCIN5JiLhrCSOodjSp8D2EqDj6LWxw'

const _supabase = createClient(dbProjectURL, dbProjectKEY)

const usersList = document.querySelector('#users-list')


const {data} = await _supabase
    .from('usersList')
    .select('*')


data.forEach(user => {
    usersList.insertAdjacentHTML('beforeend', `<tr>
        <td>${user.id}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.password}</td>
    </tr>`)
})

console.log(_supabase)