export default {
  route: '/academy',
  title: 'Marsstein Academy',
  description: 'Werden Sie zum Compliance-Experten mit unseren praxisnahen Online-Kursen.                  Von Grundlagen bis zur Expertenzertifizierung.',
  content: `
    <>
      <SEOHead>
      
      <div class="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section class="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
          <div>
            <div class="text-center text-white">
              <h1 class="text-4xl font-bold mb-4">
                Marsstein Academy
              </h1>
              <p class="text-xl text-blue-100 max-w-3xl mx-auto">
                Werden Sie zum Compliance-Experten mit unseren praxisnahen Online-Kursen. 
                Von Grundlagen bis zur Expertenzertifizierung.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section class="py-12 bg-white">
          <div>
            <div>
              <div>
                <div class="text-3xl font-bold text-blue-600">500+</div>
                <div class="text-gray-600">Lernmodule</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-600">10.000+</div>
                <div class="text-gray-600">Absolventen</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-600">95%</div>
                <div class="text-gray-600">Erfolgsquote</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-blue-600">24/7</div>
                <div class="text-gray-600">Verfügbar</div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Categories */}
        <section class="py-16">
          <div>
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
              Unsere Kurskategorien
            </h2>
            
            <div>
              {courses.map((course, index) => (
                <div>
                  <div class="flex justify-between items-start mb-4">
                    <h3 class="text-xl font-semibold text-gray-900">{course.category}</h3>
                    <span>
                      {course.level}
                    </span>
                  </div>
                  
                  <p class="text-gray-600 mb-4">
                    Kursdauer: {course.duration}
                  </p>
                  
                  <h4 class="font-medium text-gray-900 mb-2">Kursmodule:</h4>
                  <ul class="space-y-2 mb-6">
                    {course.modules.map((module, idx) => (
                      <li key={idx} class="flex items-center text-gray-600">
                        <svg class="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" ></path>
                        </svg>
                        {module}
                      </li>
                    ))}
                  </ul>
                  
                  <button>
                    Kurs starten
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section class="py-16 bg-white">
          <div>
            <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
              Warum Marsstein Academy?
            </h2>
            
            <div>
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Praxisnahe Inhalte</h3>
                <p class="text-gray-600">Von Experten entwickelt mit echten Fallbeispielen aus der Praxis</p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Zertifikate</h3>
                <p class="text-gray-600">Erhalten Sie anerkannte Zertifikate nach erfolgreichem Abschluss</p>
              </div>
              
              <div class="text-center">
                <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" ></path>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold mb-2">Flexibles Lernen</h3>
                <p class="text-gray-600">Lernen Sie in Ihrem eigenen Tempo, wann und wo Sie wollen</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="py-16 bg-blue-600">
          <div>
            <h2 class="text-3xl font-bold text-white mb-4">
              Starten Sie Ihre Compliance-Karriere
            </h2>
            <p class="text-xl text-blue-100 mb-8">
              Melden Sie sich jetzt an und erhalten Sie Zugang zu allen Kursen
            </p>
            <div>
              <Link>
                Kostenlos starten
              </Link>
              <Link>
                Beratung anfragen
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>`
};