import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import axios from 'axios';

// let data = []

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };
  const onClickHandler = async () => {
    console.log("came here")
    axios.get(`https://wide-eyed-gilet-fox.cyclic.app/sortedData`)
      .then(res => {
        const data = res.data.data;
        console.log("dataaa", data)
        setData(data);
      })   

  //   setData([{
  //     id: 100,
  //     first_name: 'Jehanna',
  //     last_name: 'Emeney',
  //     email: 'jemeney2r@ox.ac.uk',
  //     phone: '650-186-3126',
  //   },
  // ])
  }



  const onClickMagISBN = async () => {
    const isbn = search
    console.log("came here", search)
    axios.get(`https://wide-eyed-gilet-fox.cyclic.app/findByISBN?category=magazines&isbn=${isbn}`)
      .then(res => {
        const data = res.data.data;
        console.log("dataaa", data)
        setData(data);
      })  
    }

    const onClickBookISBN = async () => {
      const isbn = search
      console.log("came here", search)
      axios.get(`https://wide-eyed-gilet-fox.cyclic.app/findByISBN?category=books&isbn=${isbn}`)
        .then(res => {
          const data = res.data.data;
          console.log("dataaa", data)
          setData(data);
        })  
      }

    const onClickMagEmail = async () => {
      const email = search
      console.log("came here", search)
      axios.get(`https://wide-eyed-gilet-fox.cyclic.app/findByEmail?category=magazines&email=${email}`)
        .then(res => {
          const data = res.data.data;
          console.log("dataaa", data)
          setData(data);
        })  
      }

      const onClickBookEmail = async () => {
        const email = search
        console.log("came here", search)
        axios.get(`https://wide-eyed-gilet-fox.cyclic.app/findByEmail?category=books&email=${email}`)
          .then(res => {
            const data = res.data.data;
            console.log("dataaa", data)
            setData(data);
          })  
        }
  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>CSV Data</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Input Data'
            />
          </InputGroup>
          <Button onClick = {onClickMagISBN}variant="primary">Find Magazene By ISBN</Button>{' '}
          <Button onClick = {onClickBookISBN}variant="primary">Find Books By ISBN</Button>{' '}
          <Button onClick = {onClickMagEmail}variant="primary">Find Magazene By Author Email</Button>{' '}
          <Button onClick = {onClickBookEmail}variant="primary">Find Book By Author Email</Button>{' '}
          <Button onClick = {onClickHandler}variant="primary">Sorted Data</Button>{' '}
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            { data
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.isbn}</td>
                  <td>{item.authors}</td>
                  <td>{item.publishedAt}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;