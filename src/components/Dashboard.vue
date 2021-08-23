<template>
    <div>

        <div class="container-fluid mt-0 mx-0">

            <h5 class="text-xl mb-1 myFontGoogle text-purple-300">Here Our members</h5>

            <!-- This example requires Tailwind CSS v2.0+ -->
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="member in members" :key="member.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                     {{ member.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                      {{ member.email }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ member.position }}</div>
                <div class="text-sm text-gray-500">{{ member.dept }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ member.status }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ member.role }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <router-link v-bind:to="{name: ViewMember, params:{ member_id: member.id }}" class="text-indigo-600 hover:text-indigo-900"><fa icon="eye" class="text-2xl"/></router-link>
              </td>
            </tr>

            <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


        

        </div>
       
        <!-- Main Hero Content -->
        <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
            <div class="flex flex-col items-center mt-12 text-center object-none object-right-bottom">
                <span class="relative inline-flex w-full md:w-auto ">
                    <router-link to="/new" type="button" class="inline-flex items-center object-none object-right-bottom justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                       <fa icon="plus" class="object-none object-right-bottom text-xl" />
                    </router-link>
                    <span class="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-green-400 rounded-full">only $35/mo</span>
                </span>
                <a href="#" class="mt-3 text-sm text-indigo-500">Learn More</a>
            </div>
        </div>
        <!-- End Main Hero Content -->




        <!-- end of header tails -->
        
    </div>
</template>

<script>

import db from './firebaseinit.js';
export default {

    data() {
        return {
            
           members: [],
           
        }
    },
   

     mounted() {
    
    db.collection('members').get().then(querySnapshot =>{
        
        querySnapshot.forEach(doc => {

           console.log(doc.data())
            
            let member = {

                'id': doc.data().member_id,
                'email': doc.data().email,

                'name': doc.data().name,

                'dept': doc.data().dept,

                'position': doc.data().position,

                'status': doc.data().status,

                'role': doc.data().role

            }

            this.members.push(member)
        })

    })
 },
    
}
</script>