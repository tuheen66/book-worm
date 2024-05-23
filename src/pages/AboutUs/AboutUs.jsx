/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import AboutBanner from "./AboutBanner";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner></AboutBanner>

      <div className="about-container mb-8">
        <p>
          Welcome to <span>Book Worm</span>, your ultimate online destination
          for all things books! Founded with a passion for reading and a
          commitment to creating a Haven for book lovers, <span>Book Worm</span>{" "}
          offers an extensive collection of books across genres and formats to
          cater to every reader’s unique tastes and preferences.
        </p>
        <h2>Our Story</h2>
        <p>
          <span>Book Worm</span> was born out of a love for literature and a
          desire to make books accessible to everyone, everywhere. Our founders,
          avid readers themselves, realized the need for a comprehensive online
          bookstore that could provide a diverse selection of books along with
          personalized recommendations and exceptional customer service. From
          this vision, Book Worm was established in 2020. Since our inception,
          we have grown into a vibrant community of readers, authors, and
          literary enthusiasts. We pride ourselves on not just being a
          bookstore, but a sanctuary where stories come to life and imaginations
          soar.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is simple: to inspire and nurture a love for reading. We
          strive to:
        </p>
        <ul>
          <li>
            <span> Curate a Diverse Collection:</span> Whether you’re looking
            for the latest bestsellers, timeless classics, or hidden gems, our
            extensive catalog of over a million titles ensures there’s something
            for everyone.
          </li>
          <li>
            <span> Foster a Community of Readers: </span> We believe in the
            power of stories to connect people. Our platform offers book clubs,
            discussion forums, and author events to bring readers together.
          </li>
          <li>
            <span> Provide Exceptional Service:</span> From user-friendly
            browsing to swift delivery, our team is dedicated to ensuring a
            seamless shopping experience. Our customer support is always ready
            to assist with recommendations, queries, and more.
          </li>
        </ul>
        <h2>Our Collection</h2>
        <p>
          At <span>Book Worm</span>, we pride ourselves on our vast and varied selection. Our
          catalog spans numerous genres and categories, including:
        </p>

        <ul>
          <li>
            <span>Fiction:</span>Contemporary, Historical, Science Fiction,
            Fantasy, Mystery, Thriller, Romance, and more.
          </li>
          <li>
            <span>Non-Fiction</span>Biographies, Memoirs, Self-Help, Cookbooks,
            History, Science, and beyond.
          </li>
          <li>
            <span>Children's Books</span>Picture Books, Early Readers, Young
            Adult, Educational, and Interactive Books.
          </li>
          <li>
            <span>Academic and Professional: </span>Textbooks, Reference Books,
            Journals, and Study Guides.
          </li>
          <li>
            <span>Special Interests:</span>Graphic Novels, Comics, Art Books,
            Travel Guides, and Collector’s Editions.
          </li>
        </ul>
        <h2>Our Services</h2>
        <p>
          We understand that every reader’s journey is unique. To enhance your
          experience, we offer:
        </p>
        <ul>
          <li>
            <span>Personalized Recommendations: </span>Our intelligent
            recommendation system suggests books based on your reading history
            and preferences.
          </li>
          <li>
            <span>E-Books and Audiobooks:</span>For those who prefer digital
            formats, we offer a vast selection of e-books and audiobooks that
            can be accessed instantly.
          </li>
          <li>
            <span>Subscription Boxes:</span> Discover new books and authors with
            our themed monthly subscription boxes, carefully curated to surprise
            and delight.
          </li>
          <li>
            <span>Gift Cards and Wish Lists:</span>Share the joy of reading with
            our gift cards, or create and share wish lists for special
            occasions.
          </li>
        </ul>

        <h2>Our Community</h2>
        <p>
          <span>Book Worm </span>is more than just a store; it’s a thriving community of
          readers and writers. Our platform hosts:
        </p>

        <ul>
          <li>
            <span>Author Events and Signings:</span>Meet your favorite authors
            through virtual events and book signings.
          </li>
          <li>
            <span>Book Clubs:</span>Join a book club to discuss your favorite
            books with fellow enthusiasts.
          </li>
          <li>
            <span>Literary Blog: </span> Stay updated with book reviews, author
            interviews, reading lists, and literary news on our blog.
          </li>
        </ul>
        <h2>Sustainability and Social Responsibility</h2>
        <p>
          We are committed to making a positive impact on the world. Book Worm
          supports various literacy programs and initiatives aimed at promoting
          reading and education globally. We also prioritize eco-friendly
          practices by offering carbon-neutral shipping and sustainable
          packaging options.
        </p>
        <h2>Join Us</h2>
        <p>
          Whether you’re a lifelong bibliophile or a newcomer to the world of
          books, Book Worm invites you to embark on a literary adventure with
          us. Sign up for our newsletter to receive updates on new releases,
          exclusive offers, and upcoming events. Follow us on social media to
          join the conversation and share your reading journey.
        </p>
        <p>
          Thank you for choosing Book Worm. Together, let’s celebrate the joy of
          reading and the endless possibilities that books bring.
        </p>
        <p>Happy Reading!</p>
        <p className="text-2xl">
          The <span>Book Worm</span> Team
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
