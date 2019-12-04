var isNative = false;
function switchPerspective() {
    if (isNative) {
        isNative = false;

        document.getElementById("subtitle").innerHTML = "An Analysis of Devils Tower and Religious Freedom";

        // change p1
        document.getElementById("p1-title").innerHTML = "The History and Formation of Devils Tower";
        document.getElementById("p1-image").src = "assets/images/formation.png";
        document.getElementById("p1-content").innerHTML = "While the exact formation processes of Devils Tower is unknown, most geologists agree that is was created by magma underneath the Earth’s surface that was pushed up and cooled and then later exposed through the erosion of more exposed sedimentary rock layers. <br><br>Devils Tower’s unique column appearance is known as columnar jointing, which occurs only through the contraction and cracking of cooling igneous rocks, forming hexagonal columns. <br><br>On September 24, 1906, President Theodore Roosevelt recognized Devils Tower as the nation’s first national monument, setting aside 1,152.91 acres of land. The tower soon became a popular camping and picnicking spot for local residents and also elaborate 4th of July celebrations. The best-known Independence Day celebration was held in 1893, where a local rancher, William Rogers, climbed the tower for the first time using a 350-foot ladder and driving pegs.";

        // change p2
        document.getElementById("p2-title").innerHTML = "Recreation and Residents";
        document.getElementById("p2-content").innerHTML = "Devils Tower, standing 867 feet from its base to the summit, is a popular tourist location for hiking and climbing. The most popular hike is the 1.3 mile Tower Trail, from the Visitor Center to the base of the tower. There is also the Red Beds Trail that features views of the tower and Belle Fourche River valley and the Joyner Ridge Trail that offers different views of the tower from the north boundary of the park. Rock climbing also also become a prominent feature of the park, allowing the climbers to scale the hundreds of parallel cracks, extending nearly 400 feet upwards. The tower is a popular location for crack climbers as the hexagonal columns of the tower create cracks varying in length and width, with some large enough to fit a climber’s entire body and others barely enough for fingers. The most popular routes include the Durrance and Wiessner routes.<br><br>The first explorers settled in the western end of the Black Hills, violating the Treaty of 1868, which guaranteed the land to the Native Americans. In 1874, General George A. Custer, further lead an expedition into the hills, discovering gold. As a result, miners flooded the area. The Federal Government attempted to negotiate purchases of the land and brought in an army, but negotiations with the Natives broke down in 1875. Towns, such as Custer City and Deadwood, were popped up quickly and the Native Americans feared they would lose their reservations. By 1876, the government was in a war with the Native Americans.  Although the U.S. army lost the violent Battle of the Little Bighorn, by autumn, the Native Americans ceded the Black Hills and their lands in Wyoming to the settlers. In the 1880s, many small-scale farmers and ranchers from the midwest moved into the area.<br><br>Today, ranchers and small-scale farmers continue to inhabit the landscape, while the tourism of the tower brings in millions to the local economy.";

        // change p3
        document.getElementById("p3-title").innerHTML = "American Wilderness Philosophy";
        document.getElementById("p3-image").src = "assets/images/climb.png";
        document.getElementById("p3-content").innerHTML = "President Ulysses S. Grant’s establishment of National Parks in America cemented the belief that the wilderness was a source of hunting and recreation. Afterwards, the Organic Act of 1916 created the National Park Service to converse the natural scenery and wildlife and provide for “the enjoyment of future generations”. These two measures encouraged the proliferation of touring and camping and the capitalization on the wilderness for leisure and recreation.<br><br>Naturalist and outdoorsman, Aldo Leopold, argued that “camping and woodcraft are not only an idle nostalgia for our frontier past, they are a moral improvement upon it”. Leopold actively encouraged the use of wilderness for recreation, claiming that it was an environmentally better alternative for westward expansion.<br><br>Even today, a landscape is valued for its beauty and recreational value, with tourism in National Parks achieving more than 318 million visitors in a year and contributing $40 billion to the US Economy.";

    } else {
        isNative = true;

        document.getElementById("subtitle").innerHTML = "An Analysis of Mato Tipila and Religious Freedom";

        // change p1
        document.getElementById("p1-title").innerHTML = "The Legend of the Bear Lodge";
        document.getElementById("p1-image").src = "assets/images/legend.png";
        document.getElementById("p1-content").innerHTML = "According to Lakota Sioux legends, there was once a brave warrior who would go alone into the wilderness to fast and worship the Great Spirit in solitude because he thought that being alone would strengthen his courage. <br><br>One day, the warrior took a buffalo skull with him on his trip. He was standing at the base of the tower after completing two days of worship when he suddenly found himself on top of the rock. He was very frightened because he didn’t know how he would get down, so he appealed to the Great Spirit and went to sleep. When he woke up, he found that he was back at the base and he realized that he was standing at the entrance of a big bear’s lodge, identified by the large bear footprint on the door and the cracks in the rock made by its claws. <br><br>From that day on, the Lakota Nation called the rock Mato Tipila, or “Bear Lodge,” and would go there to worship the Great Spirit. The warrior’s buffalo skull still remains on top of the rock.";

        // change p2
        document.getElementById("p2-title").innerHTML = "Religious Significance of Mato Tipila";
        document.getElementById("p2-content").innerHTML = "As explained by Ricky Gray Grass, a medicine man from Pine Ridge, Mato Tipila is as sacred to the Lakota as “the Wailing Wall in Jerusalem is to the Jews, or Mecca is to Muslims”. It is where they go to pray and for guidance. It is also the center of cultural and religious ceremonies. For example, many Native Americans in the area gather for the annual running of the Sacred Hoop, a tradition started to remind the younger generations that they are loved. The event is a celebration and preservation of their culture, language, history, and native spirituality. The run is a five-day, 500-mile relay based on a myth about how the Lakota were blessed to enter the Black Hills.<br><br>In addition to this annual run, Mato Tipila and the surrounding Black Hills hold deep religious significance to the natives. It is an important location for “the leaving of prayer bundles, prayer offerings, the Sun Dance, sweat lodge rites, and vision quests” in the summer months, while also serving as burial grounds, hunting lands, and winter camps.<br><br>For the Lakota people specifically, the tower is considered the birthplace of wisdom, where they may go to pray for health, welfare, and personal direction. It is also the place were they received the White Buffalo Calf Pipe, the most sacred object of the Lakota given by the legendary spiritual White Buffalo Calf Woman. Every year since 1984, the tribe has also held a Sun Dance, a ceremony of fasting and sacrifice that renews the individual and group and takes away the pain of the universe and damage to nature, maintaining an ancient and dear connection with the tower. <br><br>To the Lakota, and many other native tribes, Mato Tipila is a sacred site for worship and culture, deeply embedded in and explained by their oral histories and myths.";

        // change p3
        document.getElementById("p3-title").innerHTML = "Sacred Landscapes and Religious Significance";
        document.getElementById("p3-image").src = "assets/images/prayer.png";
        document.getElementById("p3-content").innerHTML = "Native American religions place great spiritual value in land due to their beliefs that the “land is itself a sacred, living being”. The rituals they perform rely on prescribed locations because different sites have different spiritual properties and significance, which makes land non-fugible. This is very different from Western religions, which allow for worship anywhere around the world. For the natives, sacred sites like Devils Tower National Monument are their temples and churches: places used for rituals, ceremonies, and collecting medicines.<br><br>Native Americans value physical sacred sites because they focus on the significant events connected with a certain location, such as the blessing of the Black Hills to the Lakota Tribe and the sacred objects and healing skills received at Mato Tipila. They place prayer offerings, consisting of cloths and bundles, along sacred areas to represent personal connections to a site or represent an offering or request. Because Native American religion center around sacred and spiritual sites, they value the landscape for its religious significance.";
    }
}

function sticky() {
    if (window.pageYOffset >= document.getElementById("p1").offsetTop) {
        document.getElementById("navbar").classList.add("sticky");
    } else {
        document.getElementById("navbar").classList.remove("sticky");
    }
}

window.onload = function() {
    document.getElementById("toggle").onclick = switchPerspective;
};

window.onscroll = function() {
    sticky()
};
