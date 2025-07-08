import React, { useState } from 'react';
import { Phone, MapPin, Globe, Menu, X, ChevronRight, ChevronDown, Users, Shield, Lightbulb, Leaf, Award, Settings, Heart, GraduationCap, Building, Wrench, Home, Info, TreePine, Truck, BookOpen, Briefcase, Users2, Mail, Database, Zap, Target, Clock, TrendingUp, BarChart3 } from 'lucide-react';

const FlanneryBrochure = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedEquipment, setExpandedEquipment] = useState<number | null>(null);

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    // Scroll to top when changing sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const coreValues = [
    { icon: Users, title: 'People', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Shield, title: 'Safety', color: 'text-red-600', bg: 'bg-red-50' },
    { icon: Lightbulb, title: 'Innovation', color: 'text-purple-600', bg: 'bg-purple-50' },
    { icon: Leaf, title: 'Sustainability', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: Award, title: 'Value', color: 'text-orange-600', bg: 'bg-orange-50' }
  ];

  const depots = [
    { name: 'London (Head Office)', address: 'Flannery House, Third Way, Wembley, Middlesex. HA9 0RZ', phone: '0208 900 9290' },
    { name: 'Leighton Buzzard', address: 'Watling Street, Hockliffe, Bedfordshire. LU7 9PY', phone: '0208 900 9290' },
    { name: 'Bicester', address: 'Twyford Road, Poundon, Bicester, Bucks. OX27 9BG', phone: '0208 900 9290' },
    { name: 'Newport', address: 'Traston Road, Newport, Gwent. NP19 4RQ', phone: '01633 530 511' },
    { name: 'Birmingham', address: 'Dunton Wharf, Lichfield Road, Curdworth. B76 9EN', phone: '0121 725 9090' },
    { name: 'Manchester', address: 'Northbank Industrial Estate, Sorby Road, Irlam, Manchester. M44 5BA', phone: '01925 814 394' },
    { name: 'Penrith', address: 'Way to Ullswater, Flusco, Penrith. CA11 0JA', phone: '0208 900 9290' },
    { name: 'Northumberland', address: 'Bassington Lane, Cramlington, Northumberland. NE23 8AD', phone: '0844 8800 363' },
    { name: 'Aberdeen', address: 'Pitmedden Road, Dyce, Aberdeen. AB21 0HA', phone: '01224 518 028' },
    { name: 'Dublin', address: 'Tinode, Blessington, Co Wicklow. W91 KH90', phone: '+353 (0) 1 458 3472' }
  ];

  const equipmentCategories: Array<{
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    subcategories: Array<{
      name: string;
      description: string;
      count: string;
    }>;
  }> = [
    {
      title: 'Excavators',
      icon: Truck,
      subcategories: [
        { name: '1-8 Tonne', description: 'Compact excavators for tight spaces and urban projects', count: '15+ models' },
        { name: '13-28 Tonne', description: 'Mid-range excavators for versatile applications', count: '12+ models' },
        { name: '30-90 Tonne', description: 'Heavy-duty excavators for major infrastructure projects', count: '8+ models' }
      ]
    },
    {
      title: 'Specialized Excavators',
      icon: Wrench,
      subcategories: [
        { name: 'Wheeled Excavators', description: 'Mobile excavators for road work and urban environments', count: '20+ models' },
        { name: 'Long Reach Excavators', description: 'Extended reach for deep excavation and demolition', count: '10+ models' },
        { name: 'Clamshell Telescopic', description: 'Specialist deep excavation equipment for foundation work', count: '3+ models' }
      ]
    },
    {
      title: 'Earthmoving Equipment',
      icon: Truck,
      subcategories: [
        { name: 'Articulated Dump Trucks', description: '10T to 45T capacity for heavy material transport', count: '14+ models' },
        { name: 'Dumpers', description: '1T to 10T payload capacity for various applications', count: '12+ models' },
        { name: 'Tracked Dumpers', description: 'For soft ground conditions and challenging terrain', count: '7+ models' }
      ]
    },
    {
      title: 'Construction Machinery',
      icon: Settings,
      subcategories: [
        { name: 'Dozers', description: 'Machine control systems available for precision grading', count: '12+ models' },
        { name: 'Graders', description: 'Precision grading equipment for road construction', count: '2+ models' },
        { name: 'Wheeled Loaders', description: '2.3m³ to 6.9m³ bucket capacity for material handling', count: '10+ models' }
      ]
    },
    {
      title: 'Material Handling',
      icon: Database,
      subcategories: [
        { name: 'Telehandlers', description: '4M to 20M lift height for construction and industrial use', count: '10+ models' },
        { name: 'Backhoe Loaders', description: 'Versatile dig and load machines for multiple applications', count: '2+ models' },
        { name: 'Attachments', description: 'Comprehensive range of attachments for all equipment types', count: '20+ types' }
      ]
    },
    {
      title: 'Compaction & Support',
      icon: Target,
      subcategories: [
        { name: 'Rollers', description: 'Tandem and self-propelled rollers for compaction work', count: '12+ models' },
        { name: 'Tractors & Bowsers', description: 'Support vehicles and water bowsers for site operations', count: '8+ models' }
      ]
    }
  ];

  const safetyFeatures = [
    'Pedestrian Detection Systems',
    'SiteZone Proximity Warning System',
    'Cat Detect Technology',
    'Xwatch Laser Curtain',
    'Spillard Human Detection System',
    'Leica PA10 Personal Aid',
    '360-degree Camera Systems',
    'Height and Slew Restrictors',
    'OperateSAFE Cards',
    'Advanced Training Programs'
  ];

  const sustainabilityFeatures = [
    { title: 'Largest Hybrid Fleet in Europe', description: 'Over 100 Komatsu hybrid excavators with 30% fuel reduction and 20% CO2 reduction' },
    { title: 'Electric Equipment', description: 'World\'s first 17m electric telehandler from Faresin and growing electric fleet' },
    { title: 'Digital Analytics', description: 'MachineMax telematics providing real-time sustainability data and fuel monitoring' },
    { title: 'Fuel Efficiency', description: 'Advanced technology reducing CO2 emissions by up to 20% through eco-operator training' },
    { title: 'Proven Success', description: 'Working on HS2, Thames Tideway, and Highways England projects with electric equipment' },
    { title: 'Future Investment', description: 'Continuing investment in the latest innovative plant and equipment for greener construction' }
  ];

  const menuItems: Array<{
    id: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }> = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'sustainability', label: 'Sustainability', icon: TreePine },
    { id: 'safety', label: 'Safety', icon: Shield },
    { id: 'equipment', label: 'Equipment', icon: Truck },
    { id: 'training', label: 'Training', icon: BookOpen },
    { id: 'careers', label: 'Careers', icon: Briefcase },
    { id: 'community', label: 'Community', icon: Users2 },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const Navigation = () => (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => handleSectionChange('home')}
              className="flex-shrink-0 font-bold text-2xl text-blue-900 hover:text-blue-700 transition-colors"
            >
              FLANNERY
            </button>
          </div>
          
          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>0208 900 9290</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="w-4 h-4" />
              <span>flanneryplanthire.com</span>
            </div>
          </div>

          {/* Hamburger menu button for all screen sizes */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu overlay for all screen sizes */}
      {isMenuOpen && (
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSectionChange(item.id)}
                  className={`flex items-center w-full px-3 py-3 text-base font-medium transition-colors rounded-md ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <div className="px-3 py-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>0208 900 9290</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4" />
                  <span>flanneryplanthire.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <div
      className="relative text-white py-24 md:py-32 mt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(20,20,40,0.75), rgba(20,20,40,0.75)), url('/flannery-pic (1).jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 drop-shadow-lg uppercase">
          FLANNERY PLANT HIRE
        </h1>
        <p className="text-2xl md:text-3xl font-medium mb-10 drop-shadow-md text-gray-100">
          Over 50 Years of Excellence · 5,000+ Machines · 10 UK & Ireland Depots
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="flex items-center space-x-2 bg-white/10 px-5 py-3 rounded-full shadow-md">
                <Icon className={`w-6 h-6 ${value.color.replace('text-', 'text-white')}`} />
                <span className="font-semibold text-lg tracking-wide">{value.title}</span>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-8">
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-200 drop-shadow">1972</div>
            <div className="text-base opacity-90">Founded</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-200 drop-shadow">5,000+</div>
            <div className="text-base opacity-90">Machines</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-200 drop-shadow">1,600+</div>
            <div className="text-base opacity-90">Operators</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold text-blue-200 drop-shadow">10</div>
            <div className="text-base opacity-90">Depots</div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/10 rounded-lg p-4 shadow">
            <div className="text-2xl md:text-3xl font-bold text-blue-100 drop-shadow">100+</div>
            <div className="text-base opacity-90">Hybrid Excavators</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 shadow">
            <div className="text-2xl md:text-3xl font-bold text-blue-100 drop-shadow">30%</div>
            <div className="text-base opacity-90">Fuel Reduction</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 shadow">
            <div className="text-2xl md:text-3xl font-bold text-blue-100 drop-shadow">20%</div>
            <div className="text-base opacity-90">CO2 Reduction</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 shadow">
            <div className="text-2xl md:text-3xl font-bold text-blue-100 drop-shadow">24/7</div>
            <div className="text-base opacity-90">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutSection = () => (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            We've come a long way since 1972...
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From one machine (a JCB 3C Excavator) in 1972 to over 5,000 units in 2023. 
            We're proud to be a family business with strong values at its heart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Journey</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">1972 - Humble Beginnings</h4>
                  <p className="text-gray-600">Started with one JCB 3C Excavator and Patrick Flannery's vision</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Growth & Expansion</h4>
                  <p className="text-gray-600">Expanded from Feltham to 10 depots across UK & Ireland</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">2023 - Industry Leader</h4>
                  <p className="text-gray-600">5,000+ units, 1,600+ operators, purpose-built Head Office next to Wembley Stadium</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">World-Leading Partnerships</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Caterpillar', 'Komatsu', 'JCB', 'Volvo', 'Bomag', 'Wacker Neuson'].map((brand, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center font-semibold text-gray-700 border">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Makes Us Different</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Unrivalled Safety Record</h4>
              <p className="text-gray-600">Industry-leading safety innovations and training programs</p>
            </div>
            <div className="text-center">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Continuous Innovation</h4>
              <p className="text-gray-600">Latest technology, digital solutions, and sustainable equipment</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">People-Centered Approach</h4>
              <p className="text-gray-600">Excellence in service, plant standards, and operator training</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SustainabilitySection = () => (
    <div className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leading the Industry to Net Zero
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We believe it's our social responsibility to invest in the latest innovative plant and equipment for a greener construction future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🔋 Electric & Hybrid Fleet</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Largest Hybrid Fleet in Europe</h4>
                <p className="text-gray-600">100+ Komatsu hybrid excavators with 30% fuel reduction and 20% CO2 reduction</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">World's First 17m Electric Telehandler</h4>
                <p className="text-gray-600">From Faresin, expanding our electric fleet capabilities</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">Proven Electric Success</h4>
                <p className="text-gray-600">Working on HS2, Thames Tideway, and Highways England projects</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">📊 Data-Driven Green Solutions</h3>
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">
                Our MachineMax telematics dashboard provides real-time sustainability analytics:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Machine Utilisation %',
                  'Idle Time Fuel Usage',
                  'Fuel Used (Litres)',
                  'Fuel Savings (£)',
                  'CO2 Emissions (Tonnes)',
                  'Active/Idle Hours',
                  'Load Count',
                  'Average Speed'
                ].map((metric, index) => (
                  <div key={index} className="bg-green-50 p-3 rounded-lg text-sm font-medium text-green-800">
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sustainability Achievements</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {sustainabilityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const SafetySection = () => (
    <div className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Safety First, Always
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Leading the hire industry in safety innovations. Our OperateSAFE campaign empowers every employee to SPEAK UP & STOP WORK if they see unsafe conditions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🚨 Advanced Safety Systems</h3>
            <div className="space-y-4">
              {safetyFeatures.slice(0, 5).map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-red-100 rounded-full p-1">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🛡️ Additional Safety Features</h3>
            <div className="space-y-4">
              {safetyFeatures.slice(5).map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-red-100 rounded-full p-1">
                    <Shield className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">OperateSAFE Campaign</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-red-600 text-white p-6 rounded-lg mb-6">
              <div className="text-center">
                <p className="text-lg font-semibold mb-4">
                  "I am authorised to STOP carrying out a task if any sign of unsafe practice becomes apparent."
                </p>
                <p className="text-sm opacity-90">
                  Work should only continue when all hazards have been averted and the activity has been reported.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">1</div>
                <h4 className="font-semibold text-gray-900">STOP</h4>
                <p className="text-sm text-gray-600">In eyesight of operator</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">2</div>
                <h4 className="font-semibold text-gray-900">LOOK</h4>
                <p className="text-sm text-gray-600">Bucket grounded, deadman applied</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">3</div>
                <h4 className="font-semibold text-gray-900">LISTEN</h4>
                <p className="text-sm text-gray-600">Engine stop or revs drop</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600 mb-2">4</div>
                <h4 className="font-semibold text-gray-900">WAIT</h4>
                <p className="text-sm text-gray-600">For thumbs up signal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EquipmentSection = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Equipment Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Over 5,000 machines from world-leading manufacturers, available across all our UK and Ireland depots.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                    <button
                      onClick={() => setExpandedEquipment(expandedEquipment === index ? null : index)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {expandedEquipment === index ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                    </button>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                
                {expandedEquipment === index && (
                  <div className="space-y-4 mt-4">
                    {category.subcategories.map((sub, subIndex) => (
                      <div key={subIndex} className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-gray-900">{sub.name}</h4>
                        <p className="text-sm text-gray-600">{sub.description}</p>
                        <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                          {sub.count}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-900 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Value-Added Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Settings className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Digital Machine Control</h4>
              <p className="text-blue-100 text-sm">3D GPS, 2D guidance, machine control systems for precision work</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Safety Systems</h4>
              <p className="text-blue-100 text-sm">Height restrictors, proximity warning, 360° cameras, and advanced safety features</p>
            </div>
            <div className="text-center">
              <Wrench className="w-12 h-12 text-blue-300 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Maintenance & Support</h4>
              <p className="text-blue-100 text-sm">24/7 support, on-site fitters, telematics monitoring, and comprehensive maintenance</p>
            </div>
          </div>
          
          {/* Additional Services */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-blue-800 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-center">Telematics & Analytics</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="w-4 h-4 text-blue-300" />
                  <span>Machine utilization tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-blue-300" />
                  <span>Performance analytics</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-300" />
                  <span>Idle time monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4 text-blue-300" />
                  <span>Fuel efficiency data</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-800 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-center">Operator Training</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <GraduationCap className="w-4 h-4 text-blue-300" />
                  <span>CPCS certification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-blue-300" />
                  <span>Eco-operator training</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="w-4 h-4 text-blue-300" />
                  <span>Safety protocols</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-300" />
                  <span>Team development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const TrainingSection = () => (
    <div className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Training & Operator Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive training programs ensuring our operators are the best in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🏢 Operator Skills Hub</h3>
            <p className="text-gray-600 mb-4">
              Purpose-built training facility established in 2021, providing innovative, future-focused training for plant operators.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Blended on/off job training</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Earn while you learn programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">CITB accredited training centre</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎓 Skills Bootcamp</h3>
            <p className="text-gray-600 mb-4">
              Fully funded training for new entrants or part-funded through employers, with guaranteed interview opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">New entrant programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Existing operator upskilling</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">Eco-operator training</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Training Programs</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Plant Operators</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• CPCS category training</li>
                <li>• Quick hitch identification</li>
                <li>• Dual View dumper familiarisation</li>
                <li>• CPCS lifting operations</li>
                <li>• GPS familiarisation training</li>
                <li>• Eco-operator training</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">HGV Operators</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• CPC qualified HGV drivers</li>
                <li>• CPCS loader securer</li>
                <li>• Lorry driver assessment</li>
                <li>• Loadmaster training</li>
                <li>• STGO training</li>
                <li>• Working time directive</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Specialist Training</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• PTS/LUL qualified</li>
                <li>• HS2 inducted</li>
                <li>• Highways England Safety Passport</li>
                <li>• Thames Tideway inducted</li>
                <li>• Tunnel safety</li>
                <li>• People Plant Interface</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-green-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Eco-Operator Training</h3>
          <p className="text-gray-600 mb-6 text-center max-w-3xl mx-auto">
            Reducing emissions through behavioral change and efficient equipment use. Our training focuses on minimizing engine run time and maximizing equipment efficiency.
          </p>
          <div className="bg-white p-6 rounded-lg">
            <blockquote className="text-gray-700 italic text-center">
              "This training was something new and inspiring for me personally. Very useful and relevant information that made me think what impact my work has on the environment and how I can operate more effectively to reduce idle time."
            </blockquote>
            <p className="text-center text-sm text-gray-500 mt-4">- Andrew Beaumont, Machine Operator</p>
          </div>
        </div>
      </div>
    </div>
  );

  const CareersSection = () => (
    <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everyone is Welcome at Flannery
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We believe it's the people who make the company. Join our team and be part of something special.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">💼 Why Choose Flannery?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-1 mt-1">
                  <Users className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Inclusive Environment</h4>
                  <p className="text-gray-600 text-sm">Safe and comfortable working environment for all team members</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-1 mt-1">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Industry-Leading Training</h4>
                  <p className="text-gray-600 text-sm">Comprehensive development and support programs</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-1 mt-1">
                  <Award className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Career Progression</h4>
                  <p className="text-gray-600 text-sm">Clear pathways for advancement and skill development</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-full p-1 mt-1">
                  <Building className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Family Business Values</h4>
                  <p className="text-gray-600 text-sm">Strong values and community-focused culture</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 Apprenticeship Opportunities</h3>
            <p className="text-gray-600 mb-4">
              Our successful Trailblazer apprentice scheme combines hands-on learning with structured development.
            </p>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Plant Operations</h4>
                <p className="text-blue-700 text-sm">Learn to operate various construction equipment</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Maintenance & Fitting</h4>
                <p className="text-blue-700 text-sm">Technical skills for equipment maintenance</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900">Digital Solutions</h4>
                <p className="text-blue-700 text-sm">Machine control and telematics systems</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Commitment to Diversity</h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              Inclusivity and diversity are important to us. We're passionate about recruiting hard-working and talented people 
              no matter where they come from. We care about helping people succeed in their chosen career path in plant hire.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Equal Opportunities</h4>
                <p className="text-gray-600 text-sm">All backgrounds welcome</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Skills Development</h4>
                <p className="text-gray-600 text-sm">Continuous learning opportunities</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Supportive Culture</h4>
                <p className="text-gray-600 text-sm">Everyone valued and supported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CommunitySection = () => (
    <div className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Connecting With Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Building social value through education, charity work, and community engagement across the UK.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">🎓 Education & Engagement</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">School Visits</h4>
                <p className="text-gray-600 text-sm">Regular engagement days showing students plant operations and career paths</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">Plant Simulator</h4>
                <p className="text-gray-600 text-sm">Hands-on experience for students of all ages</p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-gray-900">South & City College Partnership</h4>
                <p className="text-gray-600 text-sm">Attracting local talent to construction operations and plant training</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">❤️ Charity Partnerships</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">The Lighthouse Club</h4>
                <p className="text-gray-600 text-sm">Supporting construction workers and families with emotional, physical and financial wellbeing</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900">BBC Children in Need</h4>
                <p className="text-gray-600 text-sm">Providing spotty machines for DIY SOS: Big Build charity projects across the UK</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">Pace</h4>
                <p className="text-gray-600 text-sm">Supporting children with neurodisabilities through therapy and specialist education</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Mental Health & Wellbeing</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4 text-center">Construction Sport Partnership</h4>
              <p className="text-center mb-4">
                Addressing the serious problem of mental health in construction - we lose two construction workers every day to suicide.
              </p>
              <p className="text-center text-sm opacity-90">
                Through collaboration and the power of sport, we can drive positive change in our industry.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Mental Health Support</h4>
                <p className="text-gray-600 text-sm">Resources and support for all team members</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Community Building</h4>
                <p className="text-gray-600 text-sm">Creating connections through sport and collaboration</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Industry Change</h4>
                <p className="text-gray-600 text-sm">Leading positive transformation in construction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            10 strategically located depots across the UK and Ireland to serve you better.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-blue-900 text-white p-8 rounded-2xl text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Head Office</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Flannery House, Third Way, Wembley, Middlesex HA9 0RZ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>0208 900 9290</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5" />
                <span>flanneryplanthire.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {depots.filter(depot => depot.name !== 'London (Head Office)').map((depot, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="font-bold text-gray-900 mb-3">{depot.name}</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{depot.address}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{depot.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Work With Us?</h3>
          <p className="text-xl mb-6 opacity-90">
            Contact us today to discuss your plant hire requirements
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center space-x-2">
              <Phone className="w-6 h-6" />
              <span className="text-lg font-semibold">0208 900 9290</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-6 h-6" />
              <span className="text-lg font-semibold">flanneryplanthire.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero />
            <AboutSection />
          </>
        );
      case 'about':
        return <AboutSection />;
      case 'sustainability':
        return <SustainabilitySection />;
      case 'safety':
        return <SafetySection />;
      case 'equipment':
        return <EquipmentSection />;
      case 'training':
        return <TrainingSection />;
      case 'careers':
        return <CareersSection />;
      case 'community':
        return <CommunitySection />;
      case 'contact':
        return <ContactSection />;
      default:
        return (
          <>
            <Hero />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Debug indicator to show current section */}
      <div className="fixed top-20 right-4 z-40 bg-black text-white px-3 py-1 rounded text-xs">
        Current: {activeSection}
      </div>
      
      {renderSection()}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">FLANNERY PLANT HIRE</h3>
            <p className="text-gray-300 mb-6">
              People | Safety | Innovation | Sustainability | Value
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>© 2023 Flannery Plant Hire</span>
              <span>flanneryplanthire.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlanneryBrochure;