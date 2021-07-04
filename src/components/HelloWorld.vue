<template>
	<div>
		<div class="select-wrap">
			<div class="select-inner">
               <input class="form-control" type="text" v-model="searchCar" placeholder="Search" />
			</div>
		</div>
        <div>
        <div class="car-list mt-5 pt-4" >
            <div class="container">
                <h4 class="text-center mb-5 sec-heading">Available Car</h4>
                <div class="row" >
                    <div class="col-sm-12 col-md-4" v-for="(item,key) in filteredcar" :key="key">
                        <div class="item">
                            <img :src="item.Picture" style="width:100%;" alt="">
                            <p class="price-tag">{{item.Price}}</p>
                            <div class="item-detail">
                                <h5>{{ item.Name }}</h5>
                                <p>Model: <span>{{item.Displacement}}</span></p>
                                <p>Year: <span>{{item.Year}}</span></p>
                               <router-link  :to="'/details/'+item.id"  class="light-grey-btn">More Details</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div > 
        <div class="list-item" v-for="(item,key) in filteredcar" :key="key">
            <p>Name: {{ item.Name }}</p>
        </div>
        </div>
	</div>
</template>

<script> 
import carData from "../data/car.json";
export default {
    data(){
        return{
            carData,
            searchCar:'Huracan',
        }
    },
     mounted: function() {
        this.selectedCategory = 0;
        this.selectedItem = 0;
        
    },
    computed: {
        filteredcar (){
            return this.carData.cars.filter(item => {
                return item.Name.indexOf(this.searchCar)
            })
        }      
    }
}
</script>