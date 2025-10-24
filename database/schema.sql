-- Aloha Massage Spa Database Schema
-- PostgreSQL Schema for Railway

-- Drop existing tables if they exist
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS services CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS business_hours CASCADE;

-- ============================================================================
-- SERVICES TABLE
-- ============================================================================
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    name_vi VARCHAR(100),  -- Vietnamese name
    name_zh VARCHAR(100),  -- Chinese name
    name_ja VARCHAR(100),  -- Japanese name
    description TEXT NOT NULL,
    description_vi TEXT,
    description_zh TEXT,
    description_ja TEXT,
    duration_minutes INT NOT NULL,
    price_usd DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50),  -- 'massage', 'reflexology', 'combo', etc.
    is_active BOOLEAN DEFAULT true,
    display_order INT DEFAULT 0,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for active services
CREATE INDEX idx_services_active ON services(is_active, display_order);

-- ============================================================================
-- CUSTOMERS TABLE
-- ============================================================================
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100),
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20) NOT NULL,
    preferred_language VARCHAR(5) DEFAULT 'en',  -- en, vi, zh, ja
    notes TEXT,
    total_bookings INT DEFAULT 0,
    total_spent DECIMAL(10, 2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_customers_phone ON customers(phone);

-- ============================================================================
-- BOOKINGS TABLE
-- ============================================================================
CREATE TABLE bookings (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id) ON DELETE SET NULL,

    -- Customer info (stored here too in case customer is deleted)
    customer_first_name VARCHAR(100) NOT NULL,
    customer_last_name VARCHAR(100),
    customer_email VARCHAR(255),
    customer_phone VARCHAR(20) NOT NULL,

    -- Booking details
    service_id INT REFERENCES services(id) ON DELETE SET NULL,
    service_name VARCHAR(100) NOT NULL,  -- Stored in case service changes
    duration_minutes INT NOT NULL,
    price_usd DECIMAL(10, 2) NOT NULL,

    -- Appointment time
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    booking_datetime TIMESTAMP NOT NULL,  -- Combo of date + time for easier queries

    -- Status tracking
    status VARCHAR(20) DEFAULT 'pending',  -- pending, confirmed, completed, cancelled, no_show
    cancellation_reason TEXT,

    -- Additional info
    customer_notes TEXT,
    therapist_notes TEXT,
    preferred_language VARCHAR(5) DEFAULT 'en',

    -- Timestamps
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    confirmed_at TIMESTAMP,
    completed_at TIMESTAMP,
    cancelled_at TIMESTAMP
);

-- Create indexes for efficient queries
CREATE INDEX idx_bookings_datetime ON bookings(booking_datetime);
CREATE INDEX idx_bookings_date ON bookings(booking_date);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_customer ON bookings(customer_id);
CREATE INDEX idx_bookings_email ON bookings(customer_email);
CREATE INDEX idx_bookings_phone ON bookings(customer_phone);

-- ============================================================================
-- BUSINESS HOURS TABLE
-- ============================================================================
CREATE TABLE business_hours (
    id SERIAL PRIMARY KEY,
    day_of_week INT NOT NULL,  -- 0 = Sunday, 1 = Monday, etc.
    open_time TIME,
    close_time TIME,
    is_closed BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Ensure only one entry per day
CREATE UNIQUE INDEX idx_business_hours_day ON business_hours(day_of_week);

-- ============================================================================
-- TRIGGERS FOR AUTO-UPDATE TIMESTAMPS
-- ============================================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for each table
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_business_hours_updated_at BEFORE UPDATE ON business_hours
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- INSERT DEFAULT DATA
-- ============================================================================

-- Insert default services (from your website)
INSERT INTO services (name, name_vi, name_zh, name_ja, description, duration_minutes, price_usd, category, display_order) VALUES
('Lomi Lomi Massage',
 'Massage Lomi Lomi',
 'Lomi Lomi按摩',
 'ロミロミマッサージ',
 'Traditional Hawaiian massage with flowing strokes that mimic ocean waves',
 60, 80.00, 'massage', 1),

('Deep Tissue Massage',
 'Massage Mô Sâu',
 '深层组织按摩',
 'ディープティッシュマッサージ',
 'Focused pressure to release chronic muscle tension',
 60, 90.00, 'massage', 2),

('Foot Reflexology',
 'Bấm Huyệt Chân',
 '足部反射疗法',
 '足つぼマッサージ',
 'Pressure point therapy for feet to promote relaxation',
 45, 50.00, 'reflexology', 3),

('Combo Massage',
 'Massage Kết Hợp',
 '组合按摩',
 'コンボマッサージ',
 'Foot reflexology + upper body massage - best value!',
 60, 70.00, 'combo', 4);

-- Insert default business hours (9 AM - 8 PM, 7 days)
INSERT INTO business_hours (day_of_week, open_time, close_time, is_closed) VALUES
(0, '09:00', '20:00', false),  -- Sunday
(1, '09:00', '20:00', false),  -- Monday
(2, '09:00', '20:00', false),  -- Tuesday
(3, '09:00', '20:00', false),  -- Wednesday
(4, '09:00', '20:00', false),  -- Thursday
(5, '09:00', '20:00', false),  -- Friday
(6, '09:00', '20:00', false);  -- Saturday

-- ============================================================================
-- HELPFUL VIEWS
-- ============================================================================

-- View for upcoming bookings
CREATE OR REPLACE VIEW upcoming_bookings AS
SELECT
    b.id,
    b.customer_first_name || ' ' || COALESCE(b.customer_last_name, '') as customer_name,
    b.customer_email,
    b.customer_phone,
    b.service_name,
    b.booking_date,
    b.booking_time,
    b.booking_datetime,
    b.duration_minutes,
    b.price_usd,
    b.status,
    b.customer_notes
FROM bookings b
WHERE b.booking_datetime >= CURRENT_TIMESTAMP
AND b.status NOT IN ('cancelled', 'completed')
ORDER BY b.booking_datetime;

-- View for today's bookings
CREATE OR REPLACE VIEW todays_bookings AS
SELECT
    b.id,
    b.customer_first_name || ' ' || COALESCE(b.customer_last_name, '') as customer_name,
    b.customer_email,
    b.customer_phone,
    b.service_name,
    b.booking_time,
    b.duration_minutes,
    b.price_usd,
    b.status,
    b.customer_notes,
    b.therapist_notes
FROM bookings b
WHERE b.booking_date = CURRENT_DATE
ORDER BY b.booking_time;

-- ============================================================================
-- COMMENTS FOR DOCUMENTATION
-- ============================================================================

COMMENT ON TABLE services IS 'Available massage and spa services';
COMMENT ON TABLE customers IS 'Customer contact information and history';
COMMENT ON TABLE bookings IS 'Appointment bookings with status tracking';
COMMENT ON TABLE business_hours IS 'Business operating hours by day of week';

COMMENT ON COLUMN bookings.status IS 'Status: pending, confirmed, completed, cancelled, no_show';
COMMENT ON COLUMN bookings.booking_datetime IS 'Combined date+time for efficient querying';
COMMENT ON COLUMN business_hours.day_of_week IS '0=Sunday, 1=Monday, 2=Tuesday, etc.';

-- ============================================================================
-- DATABASE SETUP COMPLETE
-- ============================================================================
