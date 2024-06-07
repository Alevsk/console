// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package tiering

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// RemoveTierNoContentCode is the HTTP code returned for type RemoveTierNoContent
const RemoveTierNoContentCode int = 204

/*
RemoveTierNoContent A successful response.

swagger:response removeTierNoContent
*/
type RemoveTierNoContent struct {
}

// NewRemoveTierNoContent creates RemoveTierNoContent with default headers values
func NewRemoveTierNoContent() *RemoveTierNoContent {

	return &RemoveTierNoContent{}
}

// WriteResponse to the client
func (o *RemoveTierNoContent) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.Header().Del(runtime.HeaderContentType) //Remove Content-Type on empty responses

	rw.WriteHeader(204)
}

/*
RemoveTierDefault Generic error response.

swagger:response removeTierDefault
*/
type RemoveTierDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewRemoveTierDefault creates RemoveTierDefault with default headers values
func NewRemoveTierDefault(code int) *RemoveTierDefault {
	if code <= 0 {
		code = 500
	}

	return &RemoveTierDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the remove tier default response
func (o *RemoveTierDefault) WithStatusCode(code int) *RemoveTierDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the remove tier default response
func (o *RemoveTierDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the remove tier default response
func (o *RemoveTierDefault) WithPayload(payload *models.APIError) *RemoveTierDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the remove tier default response
func (o *RemoveTierDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *RemoveTierDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
