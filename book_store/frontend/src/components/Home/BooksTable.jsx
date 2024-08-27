import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'

const BooksTable = ({books}) => {
  return (
    <div>
       <table className='w-full border-separate border-spacing-1'>
          
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No.</th>
              <th className='border border-slate-600 rounded-md'>Title</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Author</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Publish year</th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
 
          <tbody>
            {books.map((book,index)=>(
                <tr key={book._id} className='h-8'>
                  <td className='border border-slate-700 rounded-md text-center'>{index+1} </td>
                  <td className='border border-slate-700 rounded-md text-center'>{book.title} </td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author} </td>
                  <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.publishYear} </td>
                  <td className='border border-slate-700 rounded-md text-center'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800'/>
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600'/>
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                         <MdOutlineDelete className='text-2xl text-red-600'/>
                      </Link>

                    </div>
                  </td>
                </tr>
                ))}
          {/* If what follows the arrow is one single expression without curly braces, it implies returning the value of that expression. The return keyword is omitted.

          If wrapping curly braces follows the arrow, then what goes inside the braces are treated as normal function body, and return keyword must be used if you mean to return a value. */}
          </tbody>
        </table>
    </div>
  )
}

export default BooksTable
