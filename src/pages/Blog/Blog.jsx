import React from "react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div className="my-3 text-justify">
      <Helmet>
        <title>Blog - Great Adventure with Fahim</title>
      </Helmet>
      <div className="w-full lg:w-2/4 mx-auto px-2 my-2 text-slate-700">
        <h3 className="text-xl font-bold italic">
          Q1: Difference between SQL and NoSQL?
        </h3>
        <p className="text-md font-semibold">
          <strong className="italic">Answer: </strong>SQL is the programming
          language used to interface with relational databases. (Relational
          databases model data as records in rows and tables with logical links
          between them). NoSQL is a class of DBMs that are non-relational and
          generally do not use SQL.
        </p>
      </div>

      <div className="w-full lg:w-2/4 mx-auto px-2 my-2 text-slate-700">
        <h3 className="text-xl font-bold italic">
          Q2: What is JWT, and how does it work?
        </h3>
        <p className="text-md font-semibold">
          <strong className="italic">Answer: </strong>What is JWT (JSON Web
          Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for
          securely transmitting information between parties as JSON object. It
          is compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP).
        </p>
      </div>

      <div className="w-full lg:w-2/4 mx-auto px-2 my-2 text-slate-700">
        <h3 className="text-xl font-bold italic">
          Q3: What is the difference between javascript and NodeJS?
        </h3>
        <p className="text-md font-semibold">
          <strong className="italic">Answer: </strong>
          <span className="italic border-b-2 border-gray-700">
            Javascript
          </span>{" "}
          is a Scripting language. It is mostly abbreviated as JS. It can be
          said that Javascript is the updated version of the ECMA script.
          Javascript is a high-level programming language that uses the concept
          of Oops but it is based on prototype inheritance. in. <br />
          <span className="italic border-b-2 border-gray-700">NodeJS</span>{" "}
          NodeJS is a cross-platform and opensource Javascript runtime
          environment that allows the javascript to be run on the server-side.
          Nodejs allows Javascript code to run outside the browser. Nodejs comes
          with a lot of modules and mostly used in web development.
        </p>
      </div>

      <div className="w-full lg:w-2/4 mx-auto px-2 my-2 text-slate-700">
        <h3 className="text-xl font-bold italic">
          Q4: How does NodeJS handle multiple requests at the same time?
        </h3>
        <p className="text-md font-semibold">
          <strong className="italic">Answer: </strong>How NodeJS handle multiple
          client requests? NodeJS receives multiple client requests and places
          them into EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blog;
