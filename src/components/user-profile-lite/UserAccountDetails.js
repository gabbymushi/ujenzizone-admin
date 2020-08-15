import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import * as userService from './UserService';
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const UserAccountDetails = ({ title }) => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setlastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otherPhoneNumber, setOtherPhoneNumber] = useState('');
  const [category, setCategory] = useState('');
  const [dob, setDOB] = useState('');
  const [gender, setGender] = useState('');
  const [categories, setCategories] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      middleName,
      lastName,
      dob,
      phoneNumber,
      otherPhoneNumber,
      category,
      gender
    }
    const userResponse = await userService.postUser(user);
    console.log('userResponse', userResponse);
  }

  useEffect(() => {
    async function fetchCategories() {
      try {
        const mafundi = await userService.fetchCategories();
        console.log('Hapa', mafundi)
        setCategories(mafundi.data);
      } catch (e) {
        console.log('Hapa', e.message)
      }
    };
    fetchCategories();
  }, [])
  const itemList = categories.map((item, key) =>
    <option id={item._id} value={item._id}> {item.name}</option>
  )
  return (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={handleSubmit} action="" method="POST">
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">First Name</label>
                    <FormInput
                      id="feFirstName"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => { setFirstName(e.target.value) }}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Middle Name</label>
                    <FormInput
                      id="middleName"
                      placeholder="Middle Name"
                      value={middleName}
                      onChange={(e) => { setMiddleName(e.target.value) }}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feEmail">Last Name</label>
                    <FormInput
                      type="email"
                      id="feEmail"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => { setlastName(e.target.value) }}
                    />
                  </Col>
                  {/* Password */}
                  <Col md="6" className="form-group">
                    <label htmlFor="dob">Date oF Birth</label>
                    <FormInput
                      type="date"
                      id="dob"
                      placeholder="D.O.B"
                      onChange={(e) => { setDOB(e.target.value) }}
                    //autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feFirstName">Phone No</label>
                    <FormInput
                      id="phoneNo"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      onChange={(e) => { setPhoneNumber(e.target.value) }}
                    />
                  </Col>
                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feLastName">Alternative Phone No</label>
                    <FormInput
                      id="alternativePhoneNumber"
                      placeholder="Alternative Phone No"
                      value={otherPhoneNumber}
                      onChange={(e) => { setOtherPhoneNumber(e.target.value) }}
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* City */}
                  {/*         <Col md="6" className="form-group">
                    <label htmlFor="feCity">City</label>
                    <FormInput
                      id="feCity"
                      placeholder="City"
                      onChange={() => { }}
                    />
                  </Col> */}
                  {/* State */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feInputState">Category</label>
                    <FormSelect id="feInputState"
                      //value={category}
                      onChange={(e) => { setCategory(e.target.value) }}
                    >
                      <option id='_1'>Choose...</option>
                      {itemList}
                    </FormSelect>
                  </Col>
                  {/* Zip Code */}
                  <Col md="6" className="form-group">
                    <label htmlFor="feZipCode">Gender</label>
                    <FormSelect id="feInputState"
                      //value={category}
                      onChange={(e) => { setGender(e.target.value) }}
                    >
                      <option value=''>Choose...</option>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </FormSelect>
                  </Col>
                </Row>
                <FormGroup>
                  <label htmlFor="feAddress">Address</label>
                  <FormInput
                    id="feAddress"
                    placeholder="Address"
                    onChange={() => { }}
                  />
                </FormGroup>
                {/*    <Row form>
                  <Col md="6" className="form-group">
                    <label htmlFor="feCity">City</label>
                    <FormInput
                      id="feCity"
                      placeholder="City"
                      onChange={() => { }}
                    />
                  </Col> */}
                {/* State */}
                {/*  <Col md="4" className="form-group">
                    <label htmlFor="feInputState">State</label>
                    <FormSelect id="feInputState">
                      <option>Choose...</option>
                      <option>...</option>
                    </FormSelect>
                  </Col> */}
                {/* Zip Code */}
                {/*      <Col md="2" className="form-group">
                    <label htmlFor="feZipCode">Zip</label>
                    <FormInput
                      id="feZipCode"
                      placeholder="Zip"
                      onChange={() => { }}
                    />
                  </Col>
                </Row> */}
                {/*   <Row form>
                  <Col md="12" className="form-group">
                    <label htmlFor="feDescription">Description</label>
                    <FormTextarea id="feDescription" rows="5" />
                  </Col>
                </Row> */}
                <Button type="submit" theme="accent">Create Account</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
}

UserAccountDetails.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

UserAccountDetails.defaultProps = {
  title: "Account Details"
};

export default UserAccountDetails;
